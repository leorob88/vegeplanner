import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { typesBoxes, intolBoxes, cuisBoxes, timeRadios, resultRadios } from "./lists";
import { TimeReset, NumberReset } from "./resetButtons";

function FiltersList() {
    return (
        <div>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                    <h4 className="accordion-title">Types of recipe</h4>
                </AccordionSummary>
                <AccordionDetails>
                    <div className="filter types-boxes">{typesBoxes}</div>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2a-content" id="panel2a-header">
                    <h4 className="accordion-title">Intolerances</h4>
                </AccordionSummary>
                <AccordionDetails>
                    <div className="filter intol-boxes">{intolBoxes}</div>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel3a-content" id="panel3a-header">
                    <h4 className="accordion-title">Cuisine</h4>
                </AccordionSummary>
                <AccordionDetails>
                    <div className="filter cuis-boxes">{cuisBoxes}</div>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel4a-content" id="panel4a-header">
                    <h4 className="accordion-title">Max time (in minutes)</h4>
                </AccordionSummary>
                <AccordionDetails>
                    <TimeReset /><div className="filter time-radios">{timeRadios}</div>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel5a-content" id="panel5a-header">
                    <h4 className="accordion-title">Max number of results</h4>
                </AccordionSummary>
                <AccordionDetails>
                    <NumberReset /><div className="filter number-radios">{resultRadios}</div>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}

export default FiltersList;