module.exports = {
    getMainMenuKeyboard() {
        return {
            keyboard: [
                [{ text: "📝 ارسال بازخورد جلسه فنی" }],
                [{ text: "📚 لیست داکیومنت‌های موجود" }],
            ],
            resize_keyboard: true,
            is_persistent: true,
            input_field_placeholder: "لطفاً یک گزینه را انتخاب نمایید",
        };
    },

    async showMainMenu(ctx, fullNameInput) {
        await ctx.reply(
            `✅ اطلاعات شما با موفقیت ثبت شد ${fullNameInput}.\n\nلطفاً یکی از گزینه‌های زیر را انتخاب نمایید:`,
            {
                reply_markup: this.getMainMenuKeyboard(),
            }
        );
    },
};
