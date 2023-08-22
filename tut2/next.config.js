/** @type {import('next').NextConfig} */
const nextConfig = {
    redirects:async()=>{
        return [
            {
                source:'/users',
                destination:'/',
                permanent:false
            },
            {
                source:'/users/:userid',
                destination:'/',
                permanent:false
            },
            {
                source:'/admin',
                destination:'/',
                permanent:false
            },
            {
                source:'/college',
                destination:'/',
                permanent:false
            }
        ]
    }
}

module.exports = nextConfig