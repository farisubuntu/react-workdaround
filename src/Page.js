import Heading from "./Heading";
import Section from "./Section";


function Page() {
 return (
   // here js
   <>
      {/* Let’s say you want multiple headings
       within the same Section to always
     have the same size?? */}
   
   <Section>
       <Heading level={1}>Title</Heading>
       <Section level={3}>
        {/* how can the <Heading> component
         know the level of its closest <Section>? 
         That would require some way for a child to
          “ask” for data from somewhere
           above in the tree. */}
           {/*You can’t do it with props alone.
            This is where context comes into play. 
           */}
         <Heading>Heading</Heading>
         <Heading>Heading</Heading>
         <Heading>Heading</Heading>
         <Section level={3}>
           <Heading>Sub-heading</Heading>
           <Heading>Sub-heading</Heading>
           <Heading>Sub-heading</Heading>
           <Section level={4}>
             <Heading>Sub-sub-heading</Heading>
             <Heading>Sub-sub-heading</Heading>
             <Heading>Sub-sub-heading</Heading>
           </Section>
         </Section>
       </Section>
     </Section>
   

   </>
 );
}


export default Page;
