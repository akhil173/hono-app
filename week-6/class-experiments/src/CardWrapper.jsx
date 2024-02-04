export const CardWrapper = ({ children }) => {
  return (
    <div
      style={{
        border: "2px solid black",
        padding: 10,
        margin: 10,
      }}
    >
      {children}
    </div>
  );
};

// TextComponent taht goes inside the CardWrapper

// const TextComponent = ({ heading }) => {
//   return (
//     <div
//       style={{
//         display: "flex",
//         flexDirection: "column",
//         justifyContent: "center",
//       }}
//     >
//       <h1
//         style={{
//           display: "flex",
//         }}
//       >
//         {heading}
//       </h1>
//       <h3
//         style={{
//           display: "flex",
//         }}
//       >
//         Hello there
//       </h3>
//     </div>
//   );
// };

// To handle logic in App.jsx

{
  /* <CardWrapper>
<TextComponent heading="Heading 1. Hi There" />
</CardWrapper> */
}
