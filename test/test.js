/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var tape = require( 'tape' );
var isnan = require( '@stdlib/math-base-assert-is-nan' );
var abs = require( '@stdlib/math-base-special-abs' );
var EPS = require( '@stdlib/constants-float64-eps' );
var risingFactorial = require( './../lib' );


// FIXTURES //

var data = require( './fixtures/cpp/output.json' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof risingFactorial, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns `NaN` if provided `NaN` as any argument', function test( t ) {
	var val = risingFactorial( 0.5, NaN );
	t.strictEqual( isnan( val ), true, 'returns expected value' );

	val = risingFactorial( NaN, -1.0 );
	t.strictEqual( isnan( val ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns `1` if provided `n = 0` and a nonnegative `x`', function test( t ) {
	var val = risingFactorial( 2.0, 0 );
	t.strictEqual( val, 1.0, 'returns expected value' );

	val = risingFactorial( 0.2, 0 );
	t.strictEqual( val, 1.0, 'returns expected value' );

	val = risingFactorial( -2.0, 0 );
	t.strictEqual( val, 1.0, 'returns expected value' );

	val = risingFactorial( -0.2, 0 );
	t.strictEqual( val, 1.0, 'returns expected value' );

	t.end();
});

tape( 'the function returns `0` if provided `x = 0` and a positive `n`', function test( t ) {
	var val = risingFactorial( 0.0, 4 );
	t.strictEqual( val, 0.0, 'returns expected value' );

	val = risingFactorial( 0.0, 1 );
	t.strictEqual( val, 0.0, 'returns expected value' );
	t.end();
});

tape( 'the function returns evaluates the rising factorial if provided `x = 0` and a negative `n`', function test( t ) {
	var val = risingFactorial( 0.0, -1 );
	t.strictEqual( val, -1.0, 'returns expected value' );
	t.end();
});

tape( 'the function evaluates the rising factorial', function test( t ) {
	var expected;
	var delta;
	var tol;
	var i;
	var n;
	var x;
	var y;

	expected = data.expected;
	x = data.x;
	n = data.n;
	for ( i = 0; i < x.length; i++ ) {
		y = risingFactorial( x[i], n[i] );
		if ( y === expected[i] ) {
			t.strictEqual( y, expected[i], 'x: '+x[i]+'. n: '+n[i]+', y: '+y+'. expected: '+expected[i] );
		} else {
			delta = abs( y - expected[ i ] );
			tol = 70.0 * EPS * abs( expected[ i ] );
			t.ok( delta <= tol, 'within tolerance. x: '+x[i]+'. n: '+n[i]+'. y: '+y+'. E: '+expected[i]+'. Δ: '+delta+'. tol: '+tol );
		}
	}
	t.end();
});
