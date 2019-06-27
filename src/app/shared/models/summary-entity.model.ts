import { Book } from './book.model';

export class SummaryEntity {
    type: 'root' | 'part' | 'seperator' | 'article' | 'section';
}

export class SummaryRoot extends SummaryEntity{
    type: 'root';
    constructor(public book: Book){super();}
}

export class SummaryPart extends SummaryEntity {
    type: 'part';
    seperator: SummarySeperator;
    children: SummaryArticle[];
}

export class DisplayableSummaryEntity extends SummaryEntity {}

export class SummarySeperator extends DisplayableSummaryEntity {
    type: 'seperator';
    title: string;
    parent: SummaryPart;
}

export class SummaryArticle extends DisplayableSummaryEntity {
    type: 'article';
    title: string;
    ref: string;
    parent: SummaryArticle | SummaryPart;
    children: Array<SummaryArticle>;

    isSection(): boolean{
        return this.children.length === 0;
    }
    isArticle(): boolean{
        return !this.isSection();
    }
}

// export class SummarySection extends DisplayableSummaryEntity {
//     type: 'section';
//     title: string;
//     parent: SummarySection | SummaryPart;
//     children: Array<SummaryArticle | SummarySection>;
//     readme: SummaryArticle;
// }