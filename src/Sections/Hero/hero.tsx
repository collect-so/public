import cx from "classnames";
import { ColoredChip } from "~/components/colored-chip";
import { Button, OutlineButton } from "~/components/button";
import { ArrowRight, Book } from "lucide-react";
import { FeatureContainer } from "~/components/feature-container";
import { CodeBlock } from "~/components/codeblock";
import { JoinWaitlistButton } from "~/components/joinwaitlist-button";
import Link from "next/link";

const code1 = `// 1. Import any data

Collect.save({ 
  users: [{
    id: 11,
    verified: false,
    name: "Eva",
    books: [{
      title: "The Shining",
      year: 1977,
      author: "Stephen King"
    }]
  }]
})`;

// const code1_raw = `// 1. Import your data
//
// fetch("/api/v1/import/json", {
//   headers: {
//     "Content-Type": "application/json",
//     "token": $token
//   },
//   body: {
//     payload: {
//       users: [{
//       id: 11
//       name: "Eva",
//       books: [{
//         title: "The Shining",
//         year: 1977,
//         author: "Stephen King"
//         }]
//       }]
//     }
//   }
// )`;

const code2 = `// 2. CRUD it

Collect.find("users", {
   id: 11
}).update({
  city: "Madrid",
  verified: true,
  surname: "Gonzales"
})

Collect.find("books", {
   author: "Stephen King"
   year: { "GT": 1976 }
})
`;

const code3 = `// 3. Use instant API

/record/search

/label/users
/label/books

/property/:id/values
/property/city/equals/Madrid
/property/year/range/1976/1978
/property/verified/equals/true

// + 56 more endpoints 
// for working with data
`;
export const Hero = () => {
  return (
    <FeatureContainer className={"min-h-[100vh] sm:min-h-[100vh] pt-32"}>
      <div className={cx("z-10 relative flex flex-col gap-12")}>
        <h1 className={cx("typography-4xl mb-0 font-special")}>
          <span>Collect</span> creates instant <br className="sm:hidden" />
          <span className="text-accent-yellow">API</span> from{" "}
          <span className="text-accent-red">any</span> data
        </h1>
        <p
          className={cx(
            "typography-lg max-w-3xl text-content-secondary-dark font-mono",
          )}
        >
          Turn anything into an API and skip setting things up. Focus on the
          data itself and what it can do, not how to CRUD it.
        </p>

        <div className={cx("grid grid-cols-3 z-10 gap-8", "md:grid-cols-1")}>
          <CodeBlock className="rounded-md md:m-auto md:w-full" code={code1} />
          <CodeBlock className="rounded-md md:m-auto md:w-full" code={code2} />
          <CodeBlock className="rounded-md md:m-auto md:w-full" code={code3} />
        </div>

        {/*<div*/}
        {/*  className={*/}
        {/*    "grid grid-cols-2 gap-8 sm:grid-cols-1 sm:gap-4 max-w-[70vw] m-auto sm:max-w-full"*/}
        {/*  }*/}
        {/*>*/}
        {/*  <CodeBlock*/}
        {/*    code={code1}*/}
        {/*    className={*/}
        {/*      "justify-self-end sm:justify-self-center w-full sm:text-[14px] w-full"*/}
        {/*    }*/}
        {/*  />*/}
        {/*  <CodeBlock*/}
        {/*    code={code2}*/}
        {/*    className={*/}
        {/*      "justify-self-start sm:justify-self-center w-full sm:text-[14px] w-full"*/}
        {/*    }*/}
        {/*  />*/}
        {/*  <CodeBlock*/}
        {/*    code={code3}*/}
        {/*    className={*/}
        {/*      "justify-self-start sm:justify-self-center w-full sm:text-[14px] w-full"*/}
        {/*    }*/}
        {/*  />*/}
        {/*</div>*/}

        <div className={"flex gap-8 justify-center"}>
          <Link href="https://docs.collect.so/">
            <OutlineButton>
              Docs
              <Book />
            </OutlineButton>
          </Link>
          <Link href="https://app.collect.so/signup">
            <Button>
              Get Started
              <ArrowRight />
            </Button>
          </Link>
        </div>
      </div>
    </FeatureContainer>
  );
};
