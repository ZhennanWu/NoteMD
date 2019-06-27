import {Component, Input, OnInit, ViewChild, AfterViewInit, OnDestroy} from '@angular/core';
import {MenuItem} from '../../models/menu-item.model';
import { BehaviorSubject, interval, Observable, combineLatest} from 'rxjs';
import {debounce, map} from 'rxjs/operators';

@Component({
  selector: 'app-overflow-header',
  templateUrl: './overflow-header.component.html',
  styleUrls: ['./overflow-header.component.scss'],
})
export class OverflowHeaderComponent implements AfterViewInit, OnDestroy {

  @Input() menu: Array<[MenuItem, Function]> = [];
  @Input() menu$ = new BehaviorSubject<Array<[MenuItem, Function]>>(this.menu);
  @Input() title = '';
  @Input() title$ = new BehaviorSubject<string>(this.title);
  @Input() navigateBackEnabled = false;
  @Input() navigateBackEnabled$ = new BehaviorSubject<boolean>(this.navigateBackEnabled);

  @ViewChild('toolbar') toolbar: HTMLElement;

  availableSlotNum$ = new BehaviorSubject<number>(1);

  private sortedMenu$ = this.menu$.pipe(map(menu => menu.sort((entry1, entry2) => MenuItem.compare(entry1[0], entry2[0]))));
  private slicedMenu$ =
    combineLatest(this.sortedMenu$, this.availableSlotNum$)
      .pipe(map(val => {
        const menu = val[0];
        const slotCount = val[1];
        const alwaysCount = menu.filter(entry => entry[0].displayMode === 'always').length;
        const neverCount = menu.filter(entry => entry[0].displayMode === 'never').length;
        const hasOverflow = (neverCount === 0 && menu.length <= slotCount) ? false : true;
        // Number of displayed buttons excluding the overflow button
        const displayNum = Math.min(
          Math.max(alwaysCount, slotCount - (hasOverflow ? 1 : 0)),
          menu.length - neverCount);
        return {
          displayed: menu.slice(0, displayNum),
          overflowed: menu.slice(displayNum, menu.length)
        };
      }));
  private displayedButtons$ = this.slicedMenu$.pipe(map(sliced => sliced.displayed));
  private overflowedButtons$ = this.slicedMenu$.pipe(map(sliced => sliced.overflowed));

  constructor() { }

  mutationObserver: MutationObserver;
  ngAfterViewInit(): void {
    const mutationObserver = new MutationObserver((mutationList) => {
      // for(let mutation of mutationList){
      //   getComputedStyle(this.toolbar).getPropertyValue('width');
      // }
      const newSlotNumber = Math.floor((this.toolbar.clientWidth / 2 - 50) / 50);
      if (newSlotNumber !== this.availableSlotNum$.value) {
        this.availableSlotNum$.next(newSlotNumber);
      }
    });
    mutationObserver.observe(this.toolbar, {attributes: true , attributeFilter: ['style'], attributeOldValue: true});
    this.toolbar.addEventListener('resize', (ev) => {

    });
  }

  ngOnDestroy(): void {
    
  }

}
