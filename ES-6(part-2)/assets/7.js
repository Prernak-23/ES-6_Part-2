    <script>
        let flatten = (arr) =>
            {
            var array = [];
            while(arr.length) {
                var value = arr.shift();
                if(Array.isArray(value)) {
                // this line preserve the order
                arr = value.concat(arr);
                } else {
                array.push(value);
                }
            }
            return array;
            }
            console.log(flatten([1,2,3,[5,6,7,[4,5,6],7], 23,76, [45,67]]));
    </script>
