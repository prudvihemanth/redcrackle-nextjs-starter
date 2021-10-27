const { connectToDatabase } = require('../../lib/mongodb');
const ObjectId = require('mongodb').ObjectId;
import type { NextApiRequest, NextApiResponse } from 'next'


export default async function handler(req: NextApiRequest, res:NextApiResponse) {
    // switch the methods
    switch (req.method) {
        case 'GET': {
            return getStates(req, res);
        }
    }
}

async function getStates(req: NextApiRequest, res:NextApiResponse){
    try {
        // connect to the database
        let { db } = await connectToDatabase();
        // fetch the posts
        let posts = await db
            .collection('states')
            .find({})
            .limit(100)
            .toArray();
        // return the posts
        return res.json({
            message: JSON.parse(JSON.stringify(posts)),
            success: true,
        });
    } catch (error) {
        // return the error
        return res.json({
            message: "err in api call",
            success: false,
        });
    }
}