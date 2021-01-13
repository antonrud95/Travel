import { GraphQLClient } from "graphql-request";
import * as Blocks from "../components";

const graphcms = new GraphQLClient(process.env.GRAPHQL_URL_ENDPOINT);
export async function getStaticProps() {
  const { homepages } = await graphcms.request(
    `
    query IndexQuery() {
      homepages {
        blocks {
          __typename
          ... on Navbar {
            links {
              link
            }
            logo {
              logo {
                url
              }
            }
          }
          ... on Hero {
            title
            text
            bgimage {
              id
              url
            }
            inputs {
              type
              placeholder
            }
            button {
              name
              type
              link
            }
          }
        }
      }
    }
  `
  );

  return {
    props: {
      homepages,
    },
  };
}


function Index({ homepages }) {
  return (
    <>
      {homepages[0].blocks.map((block, index) => {
        const Component = Blocks[block.__typename];

        if (!Component) return null;

        return <Component key={index} {...block} />;
      })}
    </>
  );
}

export default Index
