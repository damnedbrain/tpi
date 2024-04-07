export function ResolveLabelForContentType({ type, locale }) {
    switch (type) {
        case "news":
            return locale === "en-US" ? "News" : "Thị trường";
        case "blog":
            return locale === "en-US" ? "Blog" : "Blog";
        case "promo":
            return locale === "en-US" ? "Promotion" : "Ưu đãi";
        default:
            return locale === "en-US" ? "All" : "Tất cả";
    }
}