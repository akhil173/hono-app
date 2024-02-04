import { memo } from "react";

export const HeaderMemo = memo(function HeaderMemo({ title }) {
  console.log("Header Memo re rendered with " + title);
  return <div>Header is {title}</div>;
});

// Goes in the App.jsx for showing how memo works

// Component and all elements are reloaded even if memo is used - when React Fragment ( <> </> ) is used. So use <div> when using memo.

{
  /* 
    <div>
      <button onClick={() => setTitle("Dynamic Title " + (count++).toString())}>
        Click here
      </button>
      <HeaderMemo title={title} />
      <HeaderMemo title="Title 1" />
      <HeaderMemo title="Title 2" />
      <HeaderMemo title="Title 3" />
      <HeaderMemo title="Title 4" /> 
    </div> */
}
