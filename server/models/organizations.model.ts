import mongoose from "mongoose";

const Organization = new mongoose.Schema(
    {
        organizationName:{type: String, required: true},
        rootUser:{
            username:{type: String, required: true},
            email:{type: String, required: true}
        },
        employees:[{
            username:{type: String, required: true},
            email:{type: String, required: true},
            assignedDomain:{type: String, required: true},
            assignedTickets:{type: String, required: true}
        }]
    },
    {collection:'organizations'}
) 

const model = mongoose.model('OrganizationData',Organization);

export default model