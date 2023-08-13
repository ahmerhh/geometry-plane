// @author:$ah
/**
 * @function getPlaneGeometry
 * Generates geometry data for a plane.
 * @param {float} [w=1] Width of the plane.
 * @param {float} [h=1] Height of the plane.
 * @param {uint} [dx=1] Number of segments along the X axis.
 * @param {uint} [dy=1] Number of segments along the Y axis.
 * @returns {Object} Geometry data containing vertices, UVs, and faces.
 */
export default function getPlaneGeometry(w = 1, h = 1, dx = 1, dy = 1) {
    dx = Math.floor(dx);
    dy = Math.floor(dy);
  
    const dx1 = dx + 1;
    const dy1 = dy + 1;
  
    const hw = w / 2;
    const hh = h / 2;
  
    const sx = w / dx;
    const sy = h / dy;
  
    // Initialize arrays to store vertex and UV data
    const verts = new Float32Array(dx1 * dy1 * 3);
    const uvs = new Float32Array(dx1 * dy1 * 2);
  
    let vertsOffset = 0;
    let uvsOffset = 0;
  
    // Generate vertices and UVs
    for (let iy = 0; iy < dy1; ++iy) {
      const y = iy * sy - hh;
  
      for (let ix = 0; ix < dx1; ++ix) {
        const x = ix * sx - hw;
  
        // Store vertex position
        verts[vertsOffset] = x;
        verts[vertsOffset + 1] = y;
        verts[vertsOffset + 2] = 0;
  
        // Store UV coordinates
        uvs[uvsOffset] = ix / dx;
        uvs[uvsOffset + 1] = 1 - iy / dy;
  
        vertsOffset += 3;
        uvsOffset += 2;
      }
    }
  
    // Determine whether to use Uint16Array or Uint32Array for faces
    const faces = verts.length / 3 > 65535
      ? new Uint32Array(dx * dy * 6)
      : new Uint16Array(dx * dy * 6);
  
    let facesOffset = 0;
  
    // Generate faces
    for (let iy = 0; iy < dy; ++iy) {
      for (let ix = 0; ix < dx; ++ix) {
        const a = ix + dx1 * iy;
        const b = ix + dx1 * (iy + 1);
        const c = (ix + 1) + dx1 * (iy + 1);
        const d = (ix + 1) + dx1 * iy;
  
        // Store indices for the two triangles forming the quad
        faces[facesOffset] = a;
        faces[facesOffset + 1] = b;
        faces[facesOffset + 2] = d;
  
        faces[facesOffset + 3] = b;
        faces[facesOffset + 4] = c;
        faces[facesOffset + 5] = d;
  
        facesOffset += 6;
      }
    }
  
    return { verts, uvs, faces };
  }
  