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
          ... on Benefit {
            title
            infoitems{
              id
              image{
                url
              }
              title
              text
              link {
                link
              }
            }
          }
          ... on Trip {
            title
            link {
              link
            }
            tripitems {
              id
              slug
              title
              image {
                url
                id
              }
            }
          }
          ... on Article {
            infoitems {
              id
              image {
                url
              }
              title
              text
              link {
                link
              }
            }
          }
          ... on Visit {
            title
            visititems {
              id
              image {
                url
              }
              town
              likes
              text
              comments
              button {
                name
                type
                link
              }
            }
          }
          ... on Video {
            image {
              url
            }
          }
          ... on Footer {
            logo {
              logo {
                url
              }
            }
            companies {
              id
              title
              links {
                id
                link
              }
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
