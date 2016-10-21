'use strict';

module.exports.loghour = (event, context, cb) => {
    var html = `<html>
                <head>
                    <title>Loghour</title>
                </head>
                <body>
                    <h1>Welcome to Loghour</h1>
                    <p> First let's get you login.
                        <a href="https://github.com/login/oauth/authorize?scope=user:email&client_id=e1132745be38ff890325">Click Here</a>
                    </p>
                </body>
                </html>`;
    
    context.succeed(html);
};
