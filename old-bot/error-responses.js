const ERROR_RESPONSES = {
    FORBIDDEN: {
        code: "FORBIDDEN",
        message: "🤖 ظرفیت استفاده از بات برای این ماه به پایان رسیده است.",
    },
    RATE_LIMIT: {
        code: "RATE_LIMIT",
        message:
            "🚫 تعداد درخواست‌ها بیش از حد مجاز است. لطفاً چند لحظه صبر کرده و مجدداً امتحان کنید.",
    },
    SERVER_ERROR: {
        code: "SERVER_ERROR",
        message:
            "💥 مشکلی در سرور Perplexity به وجود آمده است. لطفاً بعداً دوباره تلاش کنید.",
    },
    TIMEOUT: {
        code: "TIMEOUT",
        message:
            "⌛️ پاسخ‌دهی Perplexity بیش از حد طول کشید. لطفاً کمی بعد دوباره امتحان کنید.",
    },
    UNKNOWN: {
        code: "UNKNOWN_ERROR",
        message:
            "❌ خطای ناشناخته‌ای رخ داده است. لطفاً بعداً دوباره تلاش کنید.",
    },
    EXCEPTION: {
        code: "EXCEPTION",
        message:
            "❌ مشکلی در پردازش درخواست شما رخ داد. لطفاً مجدداً تلاش کنید.",
    },
};

module.exports = { ERROR_RESPONSES };
