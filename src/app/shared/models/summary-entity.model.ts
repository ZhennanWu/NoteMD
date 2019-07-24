import { Book } from './book.model';

export type SummaryStructureEntity = SummaryRoot | SummaryPart | SummaryArticle;

export class SummaryRoot {
    type: 'root';
    parent: Book;
}

export class SummaryPart {
    type: 'part';
    seperator: SummarySeperator;
    parent: SummaryRoot;
    children: SummaryArticle[];
}

export type SummaryDisplayEntity = SummarySeperator | SummaryArticle;

export class SummarySeperator {
    type: 'seperator';
    title: string;
    parent: SummaryPart;
}

export class SummaryArticle {
    type: 'article';
    title: string;
    ref: string;
    parent: SummaryArticle | SummaryPart;
    children: Array<SummaryArticle>;
    isSection(): boolean {
        return this.children.length === 0;
    }
    isArticle(): boolean {
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
