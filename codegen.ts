import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
    schema: [
        {
            [process.env.HYGRAPH_API_URL]: {
                headers: {
                    Authorization: `Bearer ${process.env.HYGRAPH_API_KEY}`,
                },
            },
        },
    ],
    documents: [
        'src/**/*.graphql',
        '!src/gql/**/*',
    ],
    generates: {
        './src/gql/': {
            preset: 'client',
        }
    },
    debug: true
}

export default config