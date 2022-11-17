import FAQItem from "./FAQItem.js";
import faqs from "./faq.js";
const FAQList = () => {
    return(`
      <div>
         ${
        faqs.map(faq => {
            return(PostSummaryItem(faq));
        }).join('')
    }
      </div>
   `);
}
export default PostSummaryList;