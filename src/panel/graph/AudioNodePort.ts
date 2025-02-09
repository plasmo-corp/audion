import * as PIXI from 'pixi.js';

import {AudionPanel} from '../Types';

/**
 * Port.
 */
export class AudioNodePort {
  node: AudionPanel.Node;
  offset: AudionPanel.Point;
  radius: number;
  color: number;
  edges: any[];

  /**
   * Create a port.
   * @param options
   * @param options.node
   * @param options.point
   * @param options.radius
   * @param options.color
   */
  constructor({
    node,
    point,
    radius,
    color,
  }: {
    node: AudionPanel.Node;
    point: AudionPanel.Point;
    radius: number;
    color: number;
  }) {
    this.node = node;
    this.offset = point;
    this.radius = radius;
    this.color = color;
    this.edges = [];
  }

  /**
   * @param graphics
   */
  draw(graphics: PIXI.Graphics) {
    graphics.lineStyle(3, this.color);
    graphics.beginFill(this.edges.length > 0 ? this.color : 0xffffff);
    graphics.drawCircle(this.offset.x, this.offset.y, this.radius);
    graphics.endFill();
  }
}
