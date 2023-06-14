import CodeBlock from "@components/@core/code-block";
import Container from "@components/@core/container";
import Badges from "@components/pages/home/badges";
import { BRAND_TITLE, HOME_USAGE } from "@utils/constants";
import React from "react";

export default function HomePage() {
  return (
    <Container title={BRAND_TITLE}>
      <Badges />
      <p>
        Include popular icons in your React projects easily with react-icons,
        which utilizes ES6 imports that allows you to include only the icons
        that your project is using.
      </p>

      <h2>Installation (for standard modern project)</h2>
      <CodeBlock language="bash" code={`npm install @accessitech/react-icons --save`} />
      <p>or</p>
      <CodeBlock language="bash" code={`yarn add @accessitech/react-icons`} />

      <h3>Usage</h3>
      <CodeBlock language="jsx" code={HOME_USAGE} />

      {/* <h2>Installation (for meteorjs, gatsbyjs, etc)</h2>
      <p>
        If your project grows in size, this option is available. This method has
        the trade-off that it takes a long time to install the package. Suitable
        for MeteorJS, Gatsbyjs etc.
      </p>
      <CodeBlock
        language="bash"
        code={`npm install @react-icons/all-files --save`}
      />

      <h3>Usage</h3>
      <CodeBlock language="jsx" code={HOME_USAGE_ALL} /> */}

      <h2>More info</h2>
      <p>
        This repository is an accessibility focused version of the original <a
          href="https://github.com/react-icons/react-icons"
          title="react-icons repository"
          target="_blank"
          rel="noreferrer"
        >
          <strong>react-icons repository</strong>
        </a>.
        It is a fork of the original react-icons library with the following changes:
      </p>
      <ul>
        <li>
          All icons are exported as {`<svg>`} elements with a {`<title>`} tag which
          defaults to &ldquo;Icon&rdquo; if no title is provided by the developer.
        </li>
        <li>
          Build scripts have been added and modified to streamline setup and contribution.
        </li>
      </ul>

      <p>
        <a href="https://github.com/accessitech/react-icons" title="GitHub" target="_blank" rel="noreferrer">GitHub &#8599;</a>
      </p>
    </Container>
  );
}
