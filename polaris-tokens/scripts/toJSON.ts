import fs from 'fs';
import path from 'path';

import {metaThemeDefault} from '../src/themes';
import * as experimentalPalette from '../src/colors-experimental';

const outputDir = path.join(__dirname, '../dist/json');

export async function toJSON() {
  await fs.promises.mkdir(outputDir, {recursive: true}).catch((error) => {
    if (error.code !== 'EEXIST') {
      throw error;
    }
  });

  for (const [tokenGroupName, metaTokenGroup] of Object.entries({
    ...metaThemeDefault,
    'experimental-palette': experimentalPalette,
  })) {
    const filePath = path.join(outputDir, `${tokenGroupName}.json`);

    await fs.promises.writeFile(filePath, JSON.stringify(metaTokenGroup));
  }
}
