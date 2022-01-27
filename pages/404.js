export default function Custom404() {
  return (
    <>
      <style jsx>
        {`
          figure {
            font-size: 6px;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 64em;
          }

          figcaption {
            color: black;
            display: flex;
            align-content: space-between;
            flex-wrap: wrap;
            height: 17em;
          }

          figcaption span:before,
          .sad-mac:before {
            content: '';
            display: block;
            width: 1em;
            height: 1em;
            transform: translate(-1em, -1em);
          }

          figcaption span {
            display: inline-block;
            margin: 0 2em;
            width: 4em;
            height: 6em;
          }

          .sr-text {
            visibility: hidden;
            position: absolute;
            width: 0;
            height: 0;
          }

          .sad-mac {
            background: black;
            margin: 0 auto 7em auto;
            width: 23em;
            height: 30em;
          }

          .sad-mac:before {
            box-shadow: 1em 1em white, 23em 1em white, 4em 3em white,
              5em 3em white, 6em 3em white, 7em 3em white, 8em 3em white,
              9em 3em white, 10em 3em white, 11em 3em white, 12em 3em white,
              13em 3em white, 14em 3em white, 15em 3em white, 16em 3em white,
              17em 3em white, 18em 3em white, 19em 3em white, 20em 3em white,
              3em 4em white, 21em 4em white, 3em 5em white, 21em 5em white,
              3em 6em white, 7em 6em white, 9em 6em white, 15em 6em white,
              17em 6em white, 21em 6em white, 3em 7em white, 8em 7em white,
              16em 7em white, 21em 7em white, 3em 8em white, 7em 8em white,
              9em 8em white, 15em 8em white, 17em 8em white, 21em 8em white,
              3em 9em white, 21em 9em white, 3em 10em white, 10em 10em white,
              13em 10em white, 21em 10em white, 3em 11em white, 11em 11em white,
              12em 11em white, 21em 11em white, 3em 12em white, 21em 12em white,
              3em 13em white, 10em 13em white, 11em 13em white, 12em 13em white,
              13em 13em white, 14em 13em white, 21em 13em white, 3em 14em white,
              9em 14em white, 15em 14em white, 16em 14em white, 21em 14em white,
              3em 15em white, 17em 15em white, 21em 15em white, 3em 16em white,
              21em 16em white, 4em 17em white, 5em 17em white, 6em 17em white,
              7em 17em white, 8em 17em white, 9em 17em white, 10em 17em white,
              11em 17em white, 12em 17em white, 13em 17em white, 14em 17em white,
              15em 17em white, 16em 17em white, 17em 17em white, 18em 17em white,
              19em 17em white, 20em 17em white, 3em 22em white, 4em 22em white,
              5em 22em white, 14em 22em white, 15em 22em white, 16em 22em white,
              17em 22em white, 18em 22em white, 19em 22em white, 20em 22em white,
              1em 27em white, 2em 27em white, 3em 27em white, 4em 27em white,
              5em 27em white, 6em 27em white, 7em 27em white, 8em 27em white,
              9em 27em white, 10em 27em white, 11em 27em white, 12em 27em white,
              13em 27em white, 14em 27em white, 15em 27em white, 16em 27em white,
              17em 27em white, 18em 27em white, 19em 27em white, 20em 27em white,
              21em 27em white, 22em 27em white, 23em 27em white, 1em 28em white,
              23em 28em white, 1em 29em white, 23em 29em white, 1em 30em white,
              23em 30em white;
          }

          ._0:before {
            box-shadow: 2em 1em, 3em 1em, 1em 2em, 1em 3em, 1em 4em, 1em 5em,
              4em 2em, 4em 3em, 4em 4em, 4em 5em, 2em 4em, 3em 3em, 2em 6em,
              3em 6em;
          }

          ._4:before {
            box-shadow: 1em 1em, 1em 2em, 1em 3em, 1em 4em, 4em 1em, 4em 2em,
              4em 3em, 4em 4em, 2em 4em, 3em 4em, 4em 5em, 4em 6em;
          }

          .d:before {
            box-shadow: 1em 1em, 2em 1em, 3em 1em, 1em 2em, 4em 2em, 1em 3em,
              4em 3em, 1em 4em, 4em 4em, 1em 5em, 4em 5em, 1em 6em, 2em 6em,
              3em 6em;
          }

          .e:before {
            box-shadow: 1em 1em, 2em 1em, 3em 1em, 4em 1em, 1em 2em, 1em 3em,
              2em 3em, 3em 3em, 1em 4em, 1em 5em, 1em 6em, 2em 6em, 3em 6em,
              4em 6em;
          }

          .f:before {
            box-shadow: 1em 1em, 2em 1em, 3em 1em, 4em 1em, 1em 2em, 1em 3em,
              2em 3em, 3em 3em, 1em 4em, 1em 5em, 1em 6em;
          }

          .n:before {
            box-shadow: 1em 1em, 1em 2em, 1em 3em, 1em 4em, 1em 5em, 1em 6em,
              4em 1em, 4em 2em, 4em 3em, 4em 4em, 4em 5em, 4em 6em, 2em 3em,
              3em 4em;
          }

          .o:before {
            box-shadow: 2em 1em, 3em 1em, 1em 2em, 1em 3em, 1em 4em, 1em 5em,
              4em 2em, 4em 3em, 4em 4em, 4em 5em, 2em 6em, 3em 6em;
          }

          .r:before {
            box-shadow: 1em 1em, 2em 1em, 3em 1em, 4em 2em, 1em 2em, 1em 3em,
              1em 4em, 2em 3em, 3em 3em, 1em 5em, 1em 6em, 4em 4em, 4em 5em,
              4em 6em;
          }

          .t:before {
            box-shadow: 1em 1em, 2em 1em, 3em 1em, 2em 2em, 2em 3em, 2em 4em,
              2em 5em, 2em 6em;
          }

          .u:before {
            box-shadow: 1em 1em, 1em 2em, 1em 3em, 1em 4em, 1em 5em, 4em 1em,
              4em 2em, 4em 3em, 4em 4em, 4em 5em, 2em 6em, 3em 6em;
          }
        `}
      </style>

      <figure>
        <div className="sad-mac"></div>
        <figcaption>
          <span className="sr-text">Error 404: Not Found</span>

          <span className="e"></span>
          <span className="r"></span>
          <span className="r"></span>
          <span className="o"></span>
          <span className="r"></span>

          <span className="_4"></span>
          <span className="_0"></span>
          <span className="_4"></span>

          <span className="n"></span>
          <span className="o"></span>
          <span className="t"></span>

          <span className="f"></span>
          <span className="o"></span>
          <span className="u"></span>
          <span className="n"></span>
          <span className="d"></span>
        </figcaption>
      </figure>
    </>
  );
}
