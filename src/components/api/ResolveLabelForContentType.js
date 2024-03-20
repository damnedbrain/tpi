export function ResolveLabelForContentType({ type, locale }) {
    switch (type) {
        case "news":
            return locale === "en" ? "News" : "Thị trường";
        case "blog":
            return locale === "en" ? "Blog" : "Blog";
        case "promo":
            return locale === "en" ? "Promotion" : "Ưu đãi";
        default:
            return locale === "en" ? "All" : "Tất cả";
    }
}