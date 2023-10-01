/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                hostname: 't4.ftcdn.net',
            },{
                hostname: "w7.pngwing.com",
            }
        ]
    },
    experimental:{
        serverActions: true,
    }
}

module.exports = nextConfig
