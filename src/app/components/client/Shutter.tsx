"use client";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";
import { RiArrowDownSFill, RiArrowUpSFill, RiCloseFill } from "react-icons/ri";

export default function Shutter({ setShutter, shutters }: any) {
  return (
    <div className="shutter">
      <div className="shutter-wrapper">
        <button
          className="shutter-close"
          onClick={() => {
            setShutter(false);
          }}>
          <RiCloseFill size={30} />
        </button>
        <Accordion className="shuter-accordion" allowZeroExpanded preExpanded={[1]}>
          {shutters.map((shutter: any) => (
            <AccordionItem className="shutter-content" uuid={shutter.id} key={shutter.id}>
              <AccordionItemHeading className="shutter-title">
                <AccordionItemButton className="shutter-item-btn">
                  <h3>{shutter.title}</h3>
                  <AccordionItemState>
                    {({ expanded }) => (expanded ? <RiArrowUpSFill size={25} /> : <RiArrowDownSFill size={25} />)}
                  </AccordionItemState>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>{shutter.content}</p>
              </AccordionItemPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
