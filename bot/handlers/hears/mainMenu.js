const returnFunction = async (ctx) => {
    try {
        await ctx.reply("لطفاً یکی از گزینه‌های زیر را انتخاب نمایید:", {
            reply_markup: {
                keyboard: [
                    [{ text: "📝 ارسال بازخورد جلسه فنی" }],
                    [{ text: "📝 ارسال بازخورد جلسه کارگاه منتورشیپ" }],
                    [{ text: "📚 لیست داکیومنت‌های موجود" }],
                ],
                resize_keyboard: true,
                is_persistent: true,
                input_field_placeholder: "لطفاً یک گزینه را انتخاب نمایید",
            },
        });
    } catch (err) {
        console.error("❌ Error returning to main menu:", err);
        ctx.reply("❌ مشکلی در بازگشت به منوی اصلی پیش آمد.");
    }
};

module.exports = (bot) => {
    bot.hears("🔙 بازگشت", async (ctx) => {
        returnFunction(ctx);
    });

    bot.hears("🔙 بازگشت به منو اصلی", async (ctx) => {
        returnFunction(ctx);
    });

    bot.hears("🔙 منو اصلی", async (ctx) => {
        returnFunction(ctx);
    });
};
