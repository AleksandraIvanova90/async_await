import json from '../parser.js';
import read from '../reader.js';

export default class GameSavingLoader {
  static async load() {
    try {
      const data = await read();
      const value = await json(data);
      return JSON.parse(value);
    } catch (error) {
      return 'error';
    }
  };
}

    
   