import { vec2 } from "gl-matrix";
import { SpriteRenderer } from "../sprite-renderer";
import { Content } from "../content";

export class HightScore {
  private readonly position = vec2.fromValues(10, 10);
  public currentScore = 0;

  public draw(spriteRenderer: SpriteRenderer) {
    spriteRenderer.drawString(
      Content.spriteFont,
      `Score: ${this.currentScore}`,
      this.position,
      undefined,
      0.5
    );
  }
}
