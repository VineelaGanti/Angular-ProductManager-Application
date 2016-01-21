/**
 * Created by nagesh on 4/6/2015.
 *///var productManagerApp=new angular.module('productManager',[]);
function ProductController($scope){

    $scope.products = [{ ProductId: 1, ProductName: 'Sony', Price: 100, Category: 'Mobiles' }, { ProductId: 2, ProductName: 'Apple', Price: 200, Category: 'Mobile' }];


    $scope.isAddOrEditOrView = {status:false,isAdding:false,isEditing:false,isViewing:false};
    $scope.addNew = function () {
        $scope.isAddOrEditOrView.status = true;
        $scope.isAddOrEditOrView.isAdding = true;

    }
    $scope.saveProduct = function () {
        $scope.product.ProductId = $scope.products.length+1;
        $scope.products.push($scope.product);



        $scope.product = null;
        $scope.isAddOrEditOrView.status = false;
        $scope.isAddOrEditOrView.isAdding = false;
    }




    $scope.updateProduct=function(){
        for(var i=$scope.products.length-1;i>=0;i--){
            if($scope.products[i].ProductId==$scope.product.ProductId){
                $scope.products[i]=$scope.product;
                break;
            }

        }

        $scope.product = null;
        $scope.isAddOrEditOrView.status = false;
        $scope.isAddOrEditOrView.isEditing = false;
        $scope.isAddOrEditOrView.isAdding = false;
        $scope.isAddOrEditOrView.isViewing = false;

    }

    $scope.editProduct = function (productId) {

        $scope.getProductById(productId);

        $scope.isAddOrEditOrView.status = true;
        $scope.isAddOrEditOrView.isEditing = true;
        $scope.isAddOrEditOrView.isAdding = false;
        $scope.isAddOrEditOrView.isViewing = false;
    }


    $scope.deleteProduct = function (productId) {
        for(var i=$scope.products.length-1;i>=0;i--){
            if($scope.products[i].ProductId==productId){
                $scope.products.splice(i,1);
                break;
            }

        }

        $scope.isAddOrEditOrView.status = false;
        $scope.isAddOrEditOrView.isEditing = false;
        $scope.isAddOrEditOrView.isAdding = false;
        $scope.isAddOrEditOrView.isViewing = false;

    }

    $scope.viewProduct = function (productId) {
        $scope.getProductById(productId);

        $scope.isAddOrEditOrView.status = true;
        $scope.isAddOrEditOrView.isAdding = false;
        $scope.isAddOrEditOrView.isEditing = false;
        $scope.isAddOrEditOrView.isViewing = true;
    }
    $scope.getProductById = function (productId) {
        for(var i=0;i<$scope.products.length;i++){
            if($scope.products[i].ProductId==productId){
                $scope.product=$scope.products[i];
            }

        }

    }
    $scope.cancel = function () {
        $scope.isAddOrEditOrView.status = false;
        $scope.isAddOrEditOrView.isAdding = false;
        $scope.isAddOrEditOrView.isEditing = false;
        $scope.isAddOrEditOrView.isEditing = false;
        $scope.product = null;
    }



}
productManagerApp.controller('ProductController',ProductController);