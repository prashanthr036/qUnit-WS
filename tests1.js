QUnit.test( "TestSquare", function( assert ) 
{
            var res = square(4);
            assert.equal( res, "16", "square(4) should be 16." );
});
		 
		 
QUnit.test( "TestCube", function( assert ) 
{
            var result = cube(3);
            assert.equal( result, "27", "cube(3) should be 27." );
});

