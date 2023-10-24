"use client"

import React from "react"
import * as RadixAccordion from "@radix-ui/react-accordion"

import { ChevronDownIcon } from "@radix-ui/react-icons"

import style from "./index.module.scss"

interface AccordionProps {
  heading: string
  children: React.ReactNode | React.ReactNode[]
}

const Accordion = React.forwardRef<HTMLDivElement, AccordionProps>(
  ({ heading, children }, reference) => {
    return (
      <RadixAccordion.Root
        className={style.accordion}
        collapsible
        defaultValue="item-2"
        ref={reference}
        type="single"
      >
        <RadixAccordion.Item className={style.accordionItem} value={`item-z`}>
          <RadixAccordion.Header className={style.accordionHeader}>
            <RadixAccordion.Trigger className={style.accordionTrigger}>
              <span>{heading}</span>
              <ChevronDownIcon aria-hidden className={style.accordionChevron} />
            </RadixAccordion.Trigger>
          </RadixAccordion.Header>

          <RadixAccordion.Content className={style.accordionContent}>
            <div className={style.accordionContentText}>{children}</div>
          </RadixAccordion.Content>
        </RadixAccordion.Item>
      </RadixAccordion.Root>
    )
  }
)

Accordion.displayName = "Accordion Component"

export default Accordion
