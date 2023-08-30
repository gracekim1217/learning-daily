
// Javascript program to find triplets in a given
// array whose sum is zero

// function to print triplets with 0 sum
function findTriplets(arr, n)
{
	let found = false;

	// sort array elements
	arr.sort((a, b) => a - b);

	for (let i=0; i<n-1; i++)
	{
		// initialize left and right
		let l = i + 1;
		let r = n - 1;
		let x = arr[i];
		while (l < r)
		{
			if (x + arr[l] + arr[r] == 0)
			{
				// print elements if it's sum is zero
				document.write(x + " ");
				document.write(arr[l]+ " ");
				document.write(arr[r]+ " " + "<br>");
				l++;
				r--;
				found = true;
			}

			// If sum of three elements is less
			// than zero then increment in left
			else if (x + arr[l] + arr[r] < 0)
				l++;

			// if sum is greater than zero then
			// decrement in right side
			else
				r--;
		}
	}

	if (found == false)
		document.write(" No Triplet Found" + "<br>");
}

// Driven source

	let arr = [0, -1, 2, -3, 1];
	let n = arr.length;
	findTriplets(arr, n);



