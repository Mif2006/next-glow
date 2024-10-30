export default function handler(req, res) {
    const info = {
        browserLanguage: req.headers["accept-language"] || "en",
        browserLinkHref: `${req.headers["x-forwarded-proto"] || req.protocol}://${req.headers.host}${req.url}`,
        browserMetadata: {
            from: "bot",
            type: "VGVF_Channel",
            data: {
                url: `${req.headers["x-forwarded-proto"] || req.protocol}://${req.headers.host}${req.url}`
            }
        }
    };

    console.log("Browser Info:", info); // Log to server console
    res.status(200).json(info); // Respond with JSON data
}
