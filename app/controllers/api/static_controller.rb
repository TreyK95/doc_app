class Api::StaticController < ApplicationController

    def api_test
      render json: {dataHere: 'working!! YO!!!'}
    end
end
