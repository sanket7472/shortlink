import Link from './../Model/Link.js'



const PostLink = async (req, res) => {
    const { target, title, slug, views } = req.body;
    const link = new Link({ target, title, slug, views })

    const savedLink = await link.save();
    res.json({
        success: true,
        data: savedLink,
        message: "Link saved successfully"
    })
}

const GetRedirectUrl = async (req, res) => {
    const { slug } = req.params;
    const link = await Link.findOne({ slug })
    if(!link) {
        res.json({
            message: "Link Not Found"
        })
    } else {
        await Link.updateOne({ slug } , { $inc: { views: 1 } })
        res.redirect(link.target);
    }
}
export {
    PostLink,
    GetRedirectUrl
}