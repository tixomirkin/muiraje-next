import nodemailer from "nodemailer";
// const nodemailer = require('nodemailer');


export async function orderHandler(formData, a) {
    'use server'

    const nodemailer = require('nodemailer');

    console.log(formData, a)

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'tixomir5150@gmail.com',
            pass: 'xdmkdjvnejcyvcbz',
        },
    });

    console.log(formData, a)

    await transporter.sendMail({
        from: '"MUIRAJE" <tixomir5150@gmail.com>',
        to: formData.get('email'),
        subject: 'YOU ORDER FROM MUIRAJE',
        text: 'YOU ORDER FROM MUIRAJE',
        html:
            'This <i>message</i> with <strong>attachments</strong>.',
    })

    console.log(formData, a)
}


// let transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//         user: 'tixomir5150@gmail.com',
//         pass: 'xdmkdjvnejcyvcbz',
//     },
// });
//
// const a = transporter.sendMail({
//     from: '"MUIRAJE" <tixomir5150@gmail.com>',
//     to: 'tixomirkin@vk.com',
//     subject: 'YOU ORDER FROM MUIRAJE',
//     text: 'YOU ORDER FROM MUIRAJE',
//     html:
//         'This <i>message</i> with <strong>attachments</strong>.',
// })
//
// console.log(a)
