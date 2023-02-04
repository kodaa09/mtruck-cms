"use client";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";
import { RiArrowDownSFill, RiArrowUpSFill } from "react-icons/ri";

export default function Shutter({setIsShutterOpen}: any) {
  return (
    <div className="shutter">
      <div className="shutter-wrapper">
        <Accordion allowZeroExpanded preExpanded={[1]}>
          <AccordionItem className="shutter-content">
            <AccordionItemHeading className="shutter-title">
              <AccordionItemButton className="shutter-item-btn">
                <p>Ipsum lorem dolores jfpzjfoz</p>
                <AccordionItemState>
                  {({ expanded }) => (expanded ? <RiArrowUpSFill size={25} /> : <RiArrowDownSFill size={25} />)}
                </AccordionItemState>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam neque nobis nisi qui ut soluta adipisci ad accusantium dolor. Magni,
                laboriosam corrupti. Facilis veritatis officia neque tenetur ab voluptatibus eveniet?25
              </p>
            </AccordionItemPanel>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
