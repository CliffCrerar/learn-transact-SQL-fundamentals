/**
 * TODO:
 */
import React from "react";
export default () => (
  <div className="code-error">
    <style jsx="true">
      {`
		.code-error{
			position: relative;
			background: #FFAB91;
			color: #B71C1C;
			white-
			padding: 3vh;
			border-radius: 4px
		`}
    </style>

    <code>
      Started executing query at Line 1 <br />
      Msg 102, Level 15, State 1, Line 2 <br />
      Incorrect syntax near &lsquo;Name&rsquo;. <br />
      Total execution time: 00:00:00.004
    </code>
  </div>
);
