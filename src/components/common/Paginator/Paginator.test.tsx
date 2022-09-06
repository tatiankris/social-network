import React from "react";
import { create } from 'react-test-renderer'
import Paginator from "./Paginator";


describe('Paginator component tests', () => {
    test('itema count is 11, but should be showed only 10', () => {
        let component = create(<Paginator totalItemsCount={11} pageSize={1} currentPage={1} onPageChanged={() => {}} portionSize={10}/>)
        let root = component.root;

        let spans = root.findAllByType('span');
        expect(spans.length).toBe(1);
    })
    test('if items count is more then 10, button NEXT should be showed', () => {
        let component = create(<Paginator totalItemsCount={11} pageSize={1} currentPage={1} onPageChanged={() => {}} portionSize={10}/>)

        let root = component.root;

        let buttons = root.findAllByType('button');

        expect(buttons.length).toBe(1);
    })

})