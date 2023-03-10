const { verifySession } = require("supertokens-node/recipe/session/framework/express");
const UserMetadata = require("supertokens-node/recipe/usermetadata");
const { v4: uuidv4 } = require('uuid');

const prisma = require("../../primsaInit");

module.exports.update = async (req, res) => {
    let userId = req.session.getUserId();
    const { name, companyName } = req.body.data;
    
    const user = await prisma.user.update({
        where:{
            id: userId
        },
        data:{
            name: name,
            company:{
                create:{
                    id: uuidv4(),
                    name: companyName
                }
            }
        }
    })
    await UserMetadata.updateUserMetadata(userId, {name: name})
    
    return res.status(200).send(user);
};


module.exports.info = async(req,res) => {
    const userId = req.session.getUserId();
    const user = await prisma.user.findUnique({
        where:{
            id: userId
        },
        include:{
            company: true
        }
    });

    const authObject = await UserMetadata.getUserMetadata(userId)

    return res.status(200).send({user,authObject});
}