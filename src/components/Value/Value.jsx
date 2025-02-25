import React, { useState } from 'react'
import "./Value.css"
import "react-accessible-accordion/dist/fancy-example.css"
import { MdOutlineArrowDropDown } from "react-icons/md"
import data from "../../utils/accordion"
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from "react-accessible-accordion"

const Value = () => {
  const [expandedIndex, setExpandedIndex] = useState(0); // Track the expanded state

  return (
    <div>
      <section className="c-wrapper">
        <div className="paddings innerWidth flexCenter v-container">
            <div className="v-left">
                <div className="image-container">
                    <img src="./v.png" alt="" />
                </div>
            </div>
            <div className="flexColStart v-right">
                <span className="orangeText">UNSERE VORTEILE</span>

                <Accordion
                    className="accordion"
                    allowMultipleExpanded={false}
                    preExpanded={[expandedIndex]} // Control the pre-expanded state from the `expandedIndex`
                >
                    {data.map((item, i) => {
                        return (
                            <AccordionItem 
                                className={`accordionItem ${expandedIndex === i ? "expanded" : "collapsed"}`}
                                key={i} 
                                uuid={i}
                            >
                                <AccordionItemHeading>
                                    <AccordionItemButton
                                        className="flexCenter accordionButton"
                                        onClick={() => setExpandedIndex(i)} // Set the expanded state when clicked
                                    >
                                        <div className="flexCenter icon">
                                            {item.icon}
                                        </div>
                                        <span className="heading">{item.heading}</span>
                                        <div className="flexCenter icon">
                                            <MdOutlineArrowDropDown size={20} />
                                        </div>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p className="detail">{item.detail}</p>
                                </AccordionItemPanel>
                            </AccordionItem>
                        );
                    })}
                </Accordion>
            </div>
        </div>
      </section>
    </div>
  );
}

export default Value;
