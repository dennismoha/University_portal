const db = require('../../config/db')
const auth = require('../Helper/AuthHelper')

// @RULE: EDIT

exports.Edit = async(req, res, sql) => {
    let { query, queryParams, message } = sql

    try {
        conn = await db.getConnection()
        const [results] = await conn.execute(query, [...queryParams])
        res.status(200).json(message)
    } catch (error) {
        if (error.sqlMessage) {
            return res.status(400).json({ message: error.sqlMessage })
        }
        return res.status(400).json({ error: ' bad request' })
    }
}

// @RULE: RESUME  - POST ROUTE

exports.resumePost = async(req, res, sql) => {
    let { query, queryParams, message } = sql

    console.log('query is ', query)
    console.log('query params is ', queryParams)
    try {
        conn = await db.getConnection()
        const [results] = await conn.execute(query, [...queryParams])
        console.log(results)
        res.status(200).json(message)
    } catch (error) {
        console.log('eror ', error)
            // if (error.sqlMessage) {
            //     return res.status(400).json({ message: error.sqlMessage })
            // }
        return res
            .status(400)
            .json({ error: ' bad request. Try again or contact support' })
    }
}