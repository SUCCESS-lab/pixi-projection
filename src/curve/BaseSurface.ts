namespace pixi_projection {
    import PointLike = PIXI.PointLike;

    export abstract class Surface implements IWorldTransform {
        surfaceID = "default";

        _updateID: number = 0;

        vertexSrc: string = "";
        fragmentSrc: string = "";

        fillUniforms(uniforms: any) {

        }

        abstract apply(pos: PointLike, newPos: PointLike): PointLike;

        //TODO: remove props
        abstract applyInverse(pos: PointLike, newPos: PointLike): PointLike;
    }
}
