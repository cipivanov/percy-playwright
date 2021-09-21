import { Page } from 'playwright-core';
import { SnapshotOptions } from '@percy/core';

export default function percySnapshot(
    page: Page,
    name: string,
    options?: SnapshotOptions
): Promise<void>;
