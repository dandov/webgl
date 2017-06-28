function CreateShader(gl, shader_source_id, type) {
	var shader = gl.createShader(type);
	gl.shaderSource(shader, document.getElementById(shader_source_id).text);
	gl.compileShader(shader);
	var successful_compilation = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
	if (successful_compilation)
		return shader;

	alert('Failed to compile shader: ' + shader_source_id);
	console.log(gl.getShaderInfoLog(shader));
	gl.deleteShader(shader);
}

function CreateProgram(gl, vertex_shader, fragment_shader) {
	var program = gl.createProgram();
	gl.attachShader(program, vertex_shader);
	gl.attachShader(program, fragment_shader);
	gl.linkProgram(program);
	var success = gl.getProgramParameter(program, gl.LINK_STATUS);
	if (success)
		return program;

	alert('Failed to create program.');
	console.log(gl.getProgramInfoLog(program));
	gl.deleteProgram(program);
	gl.deleteShader(vertex_shader);
	gl.deleteShader(fragment_shader);
}

// This function will automatically resize the canvas to match its displayed (CSS)
// size.
function ResizeCanvas(canvas) {
	// Use the logical to physical pixel ratio to make our canvas 1:1 with the
	// display's physical pixels.
	var logical_pixel_ratio = window.devicePixelRatio;

	// Client w/h corresponds to the size in CSS.
	var display_width = Math.floor(canvas.clientWidth * logical_pixel_ratio);
	var display_height = Math.floor(canvas.clientHeight * logical_pixel_ratio);

	if (canvas.width != display_width || canvas.height != display_height) {
		canvas.width = display_width;
		canvas.height = display_height;
	}
}