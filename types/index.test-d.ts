// @ts-nocheck

import { expectError, expectType } from 'tsd';
import { Page } from 'playwright-core';
import percySnapshot from '.';

declare const page: Page;

expectError(percySnapshot());
expectError(percySnapshot(page));
expectError(percySnapshot('Snapshot name'));

expectType<Promise<void>>(percySnapshot(page, 'Snapshot name'));
expectType<Promise<void>>(percySnapshot(page, 'Snapshot name', { widths: [1000] }));

expectError(percySnapshot(page, 'Snapshot name', { foo: 'bar' }));
