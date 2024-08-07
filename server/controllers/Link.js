import User from "../models/User.js";
import Link from "../models/Link.js";


const getAllLinks = async (req, res) => {
    const {userId} = req.query
    console.log('userId', userId)
    
    const user = await User.findById(userId);

    if (!user) {
        return res.json({
            success: false,
            data: null,
            message: "User not found"
        })
    }

    const allLinks = await Link.find({ user : userId }).sort({ createdAt : -1 })
    res.json({
        success: true,
        data: allLinks,
        message: "All Link fetched successfully"
    })
}

const postLink = async (req, res) => {
    const { target, slug, title, user } = req.body;

    const link = new Link({
        target,
        slug,
        title,
        user
    })
    try {
        const savedLink = await link.save();

        res.json({
            success: true,
            data: savedLink,
            message: "Link created successfully...!"
        })
    }
    catch (e) {
        res.json({
            success: false,
            data: null,
            message: e.message
        })
    }
}

const getRedirected = async (req, res) => {
    const { slug } = req.params;
    const link = await Link.findOne({ slug })

    if (!link) {
        return res.json({
            success: false,
            message: 'Link not found',
        })
    }
    link.views = link.views + 1;
    await link.save()

    res.redirect(link.target)
}

export { postLink, getRedirected, getAllLinks };
