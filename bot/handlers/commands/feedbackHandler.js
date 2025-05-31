const CryptoJS = require("crypto-js");
const {
    USERNAME_SPECIAL_FN,
    ENCRYPTION_KEY,
    FORM_BASE_URL,
} = require("../../config");

module.exports = (bot) => {
    bot.on("text", async (ctx, next) => {
        const text = ctx.message.text?.trim();

        // Step 1: Awaiting user selection
        if (ctx.session.step === "awaiting_user_selection") {
            if (
                !ctx.session.availableUsers ||
                !ctx.session.availableUsers.includes(text)
            ) {
                return ctx.reply(
                    "❗ لطفاً یکی از گزینه‌های موجود را انتخاب نمایید."
                );
            }

            ctx.session.selectedUser = text;
            ctx.session.step = "awaiting_feedback";
            return;
        }

        // Step 2: Awaiting feedback
        if (ctx.session.step === "awaiting_feedback") {
            console.log("jello");

            try {
                const username = ctx.from?.username;
                if (!username) {
                    return ctx.reply(
                        "❌ یوزرنیم شما وجود ندارد. لطفاً ابتدا در تنظیمات تلگرام برای خود یک username تعریف کنید."
                    );
                }

                const date = new Date()
                    .toISOString()
                    .slice(2, 10)
                    .replace(/-/g, "");
                const combined = `${username}:${date}`;
                const specialUsername = eval(USERNAME_SPECIAL_FN)(combined);
                const encrypted = CryptoJS.AES.encrypt(
                    specialUsername,
                    ENCRYPTION_KEY
                ).toString();

                const feedbackUrl = `${FORM_BASE_URL}?form=${encodeURIComponent(
                    encrypted
                )}`;

                await ctx.reply(
                    `📝 *لینک اختصاصی ثبت بازخورد شما آماده است!*\n\nاین لینک برای ثبت بازخورد با *نام کاربری شما* ساخته شده است.` +
                        `\n\n⚠️ درصورت تغییر در آدرس، لینک معتبر نخواهد بود.\n\n📎 لینک شما:\n${feedbackUrl}`,
                    {
                        parse_mode: "Markdown",
                        disable_web_page_preview: true,
                    }
                );
            } catch (err) {
                console.error("❌ Feedback link error:", err);
                ctx.reply("❌ مشکلی در ساخت لینک بازخورد پیش آمد.");
            }
        }

        return next();
    });
};
