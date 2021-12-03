const nodemaider = require('nodemailer')

const mail = {
    send: async (toMail, subjectMail, textMail, htmlMail) => {
        const transporter = nodemaider.createTransport({
            host: process.env.HOST_MAIL,
            port: process.env.PORT_MAIL,
            auth: {
                user: process.env.USER_MAIL,
                pass: process.env.PASS_MAIL
            },
            tls: {
                // do not fail on invalid certs
                rejectUnauthorized: false}
        })

        const mailOptions = {
            from: process.env.USER_MAIL,
            to:toMail,
            subject: subjectMail,
            text: textMail,
            html: htmlMail
        }

        let info = await transporter.sendMail(mailOptions)

        return info
    }
}

module.exports = mail