const socialLinks = [
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/likemario/",
    className: "fab fa-linkedin",
  },
  {
    name: "github",
    url: "https://github.com/LikeMario",
    className: "fab fa-github",
  },
];

const publicWorks = [
  {
    title: "Distributed Subgraph Isomorphism",
    htmlText: `
    <p>In my master thesis, I studied the Graph Processing Frameworks as well as solving problems with them. Graph processing frameworks generally provide a vertex-centric programming model. However, some important problems do not have available algorithms in this model. </p>
    
    <p>The subgraph isomorphism problem is to determine whether a given graph contains any subgraph that is isomorphic to a given pattern. Most existing algorithms for subgraph isomorphism are highly computation intensive and are not capable to scale to large graphs. As solving subgraph isomorphism often requires a global overview of graph, developing a vertex-centric algorithm is very challenging.</p>
    
    <p>I presented a novel algorithms in vertex-centric programming paradigm for Distributed Subgraph Isomorphism.</p> 
    `,
    image: "subgraph-isomorphism.png",
    links: [
      {
        name: "github",
        url:
          "https://github.com/LikeMario/PowerGraph/tree/thesis/apps/SubgraphIsomorphism",
        className: "fab fa-github",
        tooltip: "",
      },
      {
        name: "download-thesis",
        url: "/data/public/master-thesis/papers.zip",
        className: "fas fa-download",
        tooltip: "thesis",
      },
    ],
  },
  {
    title: "My Personal Website",
    plainText: `This is my personal website, which is made with React.js, based on Serverless Application Model and deployed on Amazon Web Service.`,
    // htmlText: "<p>Some text, <strong>Strong</strong></p>",
    image: "cloud-native.jpg",
    links: [
      {
        name: "licn",
        url: "https://github.com/LikeMario/licn-personal-website",
        className: "fab fa-github",
      },
    ],
  },
];

const acclaimCertificates = {
  "data-iframe-width": "200",
  "data-iframe-height": "350",
  "data-share-badge-id": "",
  "data-share-badge-host": "https://www.youracclaim.com",
  ids: [
    "ff646f73-8a1c-4601-b472-f0418400c3c3",
    "558f8352-ee8b-4bb4-aa99-6d8c7631df2a",
    "91f4f842-6721-49e3-a118-c69af22f7110",
    "175fe97b-930e-45c8-af01-6aa454446e7e",
  ],
};

module.exports = {
  socialLinks,
  publicWorks,
  acclaimCertificates,
};
